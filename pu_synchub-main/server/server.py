from flask import Flask, request, jsonify
from pymongo import MongoClient
import spacy

nlp = spacy.load("en_core_web_md")

app = Flask(__name__)
cluster = MongoClient('mongodb+srv://yakshmahawer:fZdDSYRANzjQsfkc@synchub.shfybci.mongodb.net/?retryWrites=true&w=majority&appName=SyncHub')
db = cluster['login']
collection = db['Users']
collectionp = db['Project']
dbm = cluster['pu_synchub']
students_collection = dbm['Student']
project_collection = dbm['Project']
teachers_collection = dbm['Mentor']

@app.route('/register_team', methods=['POST'])
def register_team():
    data = request.json
    leader_email = data.get('leaderEmail')
    member_emails = [data.get(f'mem{i}Email') for i in range(2, 5)]
    mentor_email = data.get('mentorEmail')

    students =list(students_collection.find({'email': {'$in': [leader_email] + member_emails}}))
    if len(students) != 4:
        return jsonify({'error': 'One or more team members not found in student collection'}), 400

    mentor = teachers_collection.find_one({'email': mentor_email})

    if not mentor:
        return jsonify({'error': 'Mentor not found in mentor collection'}), 400

    for student in students:
        print(student)
        if 'status' not in student:
            break
        else:
            return jsonify({'message': students[0]['status'] }), 200

    project_data = {
        'team_members': [student['email'] for student in students],
        'mentor_id': mentor['_id'],
        'status': '1'
    }
    print(project_data)
    project_id = project_collection.insert_one(project_data).inserted_id

    students_collection.update_many(
        {'email': {'$in': [leader_email] + member_emails}},
        {'$set': {'status': '1'}}
    )

    teachers_collection.update_one(
        {'email': mentor_email},
        {'$push': {'project_ids': project_id}}
    )

    return jsonify({'message': 'Step 1 completed successfully'}), 200


@app.route('/register_project', methods=['POST'])
def register_project():
    data = request.json
    project_name = data.get('projectName')
    project_description = data.get('projectDescription')

    existing_project = project_collection.find_one({'$or': [{'project_name': project_name}, {'project_description': project_description}]})
    if existing_project:
        return jsonify({'error': 'Project with similar name or description already exists'}), 400
    
    leader_email = data.get('leaderEmail')

    project_collection.update_one(
    {'team_members.3': leader_email},
    {'$set': {'project_name': project_name, 'project_description': project_description}}
    )
    
    student = list(project_collection.find({'team_members.3':'ap7841957@gmail.com'},{'team_members':1}))
    student = (student[0]['team_members'])

    students_collection.update_many(
        {'email': {'$in': student }},
        {'$set': {'status': '2'}}
    )

    return jsonify({'message': 'Project details added successfully'}), 

@app.route('/create', methods=['POST','GET'])
def create():
    try:
        data = request.json

        # Extract data from request
        userType = data.get('userType')
        email = data.get('email')
        name = data.get('name')
        password = data.get('password')
        phoneNumber = data.get('phoneNumber')

        # Check if the user type is valid
        if userType not in ['student', 'teacher']:
            return jsonify({'error': 'Invalid user type'}), 400

        # Check if the email exists in the corresponding collection
        if userType == 'student':
            if students_collection.find_one({'email': email}):
                return jsonify({'error': 'Email already exists in student collection'}), 400
            else:
                students_collection.insert_one({
                    'email': email,
                    'name': name,
                    'password': password,
                    'phone_number': phoneNumber
                })
                return jsonify({'message': 'Student data inserted successfully'}), 200
        elif userType == 'teacher':
            if teachers_collection.find_one({'email': email}):
                return jsonify({'error': 'Email already exists in teacher collection'}), 400
            else:
                teachers_collection.insert_one({
                    'email': email,
                    'name': name,
                    'password': password
                })
                return jsonify({'message': 'Teacher data inserted successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


def find_matching_projects(input_text):
    if input_text is None: 
        return []
    all_projects = list(collectionp.find())
    nlp = spacy.load("en_core_web_md")

    min_similarity_threshold = 0.4

    matching_projects = []
    for project in all_projects:
        if project['projectName'] is None or project['description'] is None:
            continue
        name_similarity = nlp(input_text).similarity(nlp(project['projectName']))
        desc_similarity = nlp(input_text).similarity(nlp(project['description']))
        combined_similarity = (name_similarity + desc_similarity) / 2  

        if combined_similarity >= min_similarity_threshold:
            matching_projects.append((project, combined_similarity))

    sorted_projects = sorted(matching_projects, key=lambda x: x[1], reverse=True)

    top_projects = [proj[0] for proj in sorted_projects[:10]]
    return top_projects

@app.route('/search', methods=['POST'])
def search_projects():
    input_text = request.get_json().get('projectName')
    matching_projects = find_matching_projects(input_text)
    project_responses = [{'name': project['projectName'], 'description': project['description'],'leaderEmail':project['leaderEmail']} for project in matching_projects]
    print(project_responses)   
    return jsonify({'matchingProjects': project_responses})

if __name__ == '__main__':
    app.run(debug=True)
