from flask import Flask, jsonify
import json
import os

polku = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(polku, "sanakirja.json"), "r", encoding="utf-8") as tiedosto:
    sanakirja = json.load(tiedosto)

app = Flask(__name__)
@app.route("/kaannos/<sana>")

def kaannos(sana):
    if sana.lower() in sanakirja:
        return jsonify({
            "Suomi": sanakirja[sana],
            "Englanti": sana
        })
    else:
        return jsonify({
            "error": "Sanaa ei loydy"
        }), 404


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000)