from flask import Flask, render_template, request
app = Flask(__name__)

trial = ''
@app.route('/')
def student():
   return render_template('form.html')

@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      result = request.form
      trial = result
      trial = dict(trial)
      with open("file.txt","a") as f:
          f.write(trial[list(trial.keys())[0]])
          f.write(' : ')
          f.write(trial[list(trial.keys())[1]])
          f.write('\n')
      return render_template("result.html",result = result)

if __name__ == '__main__':
   app.run(debug = True)

