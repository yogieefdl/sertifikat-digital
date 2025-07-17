from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html", scheme=request.scheme.upper())

if __name__ == '__main__':
    app.run(ssl_context=('certs/cert.pem', 'certs/key.pem'), debug=True)

