from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://USERNAME:PASSWORD@localhost/hackathon'
db = SQLAlchemy(app)
CORS(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(300))

@app.route('/users', methods=['GET', 'POST'])
def login():
    users = Users.query.all()
    data = request.get_json()
    print(data)
    username = data['username']
    password = data['password']
    # perform authentication logic here
    for user in users:
        if username == user.name and password == user.password:
            return jsonify({'success': True})

    return jsonify({'success': False, 'message': 'Invalid username or password'}), 404

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1024))
    price = db.Column(db.Integer)
    star_rating = db.Column(db.Integer)
    myImage = db.Column(db.String(1024))

@app.route('/allProducts', methods=['GET'])
def get_products():
    products = Products.query.all()
    product_list = []
    for product in products:
        product_dict = {}
        product_dict['id'] = product.id
        product_dict['name'] = product.name
        product_dict['myImage'] = product.myImage
        product_dict['star_rating'] = product.star_rating
        product_dict['price'] = product.price
        product_list.append(product_dict)
    return jsonify({'products': product_list})

class NewProduct(db.Model):
    __tablename__ = 'Newproduct'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(1024))
    src_img_1 = db.Column(db.String(1024))
    src_img_2 = db.Column(db.String(1024))
    src_img_3 = db.Column(db.String(1024))
    src_img_4 = db.Column(db.String(1024))
    description = db.Column(db.String(1024))
    content= db.Column(db.String(1024))
    price = db.Column(db.Integer)
    count = db.Column(db.Integer)

@app.route('/product/<int:id>', methods=['GET'])
def get_product(id):
    products = NewProduct.query.all()
    product_list = []
    for product in products:
        if(product.id == id):
            product_dict = {}
            product_dict['_id'] = product.id
            product_dict['title'] = product.title
            product_dict['src'] = [product.src_img_1, product.src_img_2, product.src_img_3, product.src_img_4]
            product_dict['description'] = product.description
            product_dict['content'] = product.content
            product_dict['price'] = product.price
            product_dict['count'] = product.count
            product_list.append(product_dict)
            return jsonify({'p': product_list})
    return jsonify({'success': False, 'message': 'Not a valid user'}), 404

if __name__ == '__main__':
    app.run(debug=True)
