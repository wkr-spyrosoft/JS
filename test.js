
class Reviewer {
    lastNames = document.querySelector("div.user-panel.main table tr td.last-name");

    constructor({
        name,
        lastname
    }) {
        this.name = name;
        this.lastName = lastname;
    }

    markAll() {
        for (i = 0; i < authors.length; i++) {
            authors[i].onMouseOver = function () {
                this.markElement(authors[i]);
            }
        }
    }

    markElement(element) {
        element.alt = "Reviewed by" + this.name + ' ' + this.lastName;
    }
}

var reviewer = Reviewer('John', 'Smith');
reviewer.markAll();
