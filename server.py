from bottle import route, run, template, static_file, get



@get('/index')
def index():
    return static_file("index.html", root=".")

@get('/css/style.css')
def css():
    return static_file("style.css", root="./css")

@get('/js/<pfad:path>')
def js(pfad):
    return static_file(pfad, root="./js")

@get('/contactform/<pfad:path>')
def contactform(pfad):
    return static_file(pfad, root="./contactform")

@get('/img/<pfad:path>')
def img(pfad):
    return static_file(pfad, root="./img")

@get('/lib/<pfad:path>')
def lib(pfad):
    return static_file(pfad, root="./lib")

run(host='localhost', port=8080)
