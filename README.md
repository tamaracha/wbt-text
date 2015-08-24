# wbt-text
Angular-Modul zum rendern der WBT-Inhalte

Dieses Angular-Modul kann Texte nach HTML übersetzen, die in Markdown geschrieben sind und Formeln in LaTeX enthalten. Ich habe dieses Modul aus meinem Statistik-WBT extrahiert, weil ich es auch für andere Projekte einsetze.

Text
: Wird mit Hilfe von markdown-it übersetzt
Mathematiksatz
: Nutzt MathJax, um im Text eingefügte Formeln zu übersetzen.

### Voraussetzungen
* Angular.JS
* Angular-Sanitize

## Installation
### NPM/Webpack
Installiere das paket:
```sh
npm i tamaracha/wbt-text
```

Binde das Paket ein. Es gibt den Namen des Moduls für Angular zurück.

```javascript
const angular = require('angular');
const wbtText = require('wbt-text');
angular.module('myApp',[wbtText]);
```

### Browser
* Lade dieses Repo als Zip herunter und entpacke es.
* Binde die Voraussetzungen und die Datei dist/wbt-text.min.js als Script-Tag im HTML ein (bitte Pfade anpassen). Falls Markdown-it schon vom CDN aus eingebunden wurde, wähle die Datei dist/wbt-text-no-markdown-it.min.js.

```html
<script src="angular.min.js"></script>
<script src="angular-sanitize.min.js"></script>
<script src="wbt-text/dist/wbt-text.min.js"></script>
<script>
angular.module('myApp',['wbt.text"]);
</script>
```

## Benutzung
### Service
Der Service markdown ist eine Instanz des Constructors von Markdown-it und verhält sich also dementsprechend. Nutze ihn zum rendern von Text:

```javascript
angular.module('myApp')
.controller(['markdown',function(markdown){
  this.text = '# hello markdown';
  this.html = markdown.render(this.text);
}]);
```

### Directive
Die Directive markdown kann Text auf folgende Arten übersetzen:

#### Scope-Eigenschaft
Der Text wird z.B. im Controller als Scope-Eigenschaft definiert. Im HTML wird an der gewünschten Stelle ein Element mit dem markdown-Attribut eingefügt, das auf die scope-Eigenschaft verweist.

```html
<div markdown="app.text"></div>
```

#### Direkteingabe
Füge ein markdown-Element im HTML ein und setze Text zwischen die Tags.

```html
<markdown>#Hello markdown</markdown>
```

### Provider
Es kann das Preset und die Optionen von markdown-it konfiguriert werden. Konfiguriere das Modul mit dem markdownProvider. Es gibt zwei Getter/Setter-Eigenschaften

* markdownProvider.preset
* markdownProvider.options
