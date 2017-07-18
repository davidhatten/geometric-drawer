
class HistoryData {
    constructor(lines, config) {
        this.lines = lines;
        this.config = config;
    }
}


class History {
    constructor(){
        this.historyData = {};
    }

    addHistoryRow(drawingName, drawnLines, config) {
        const self = this;
        const historyRow = $(`<tr id="${self.drawingNameId(drawingName)}">
                                <td>${drawingName}</td>
                                <td><a href="#" class="button" id="deleteRow" onclick="history.deleteHistoryRow('${drawingName}');">Delete</button></td>
                            </tr>`);
        historyRow.hover(
            function(event) {
                var row = $(this);
                // Get the data from the td of the row
                self.highlightLines(row.find(`td`)[0].innerHTML);
            },
            function(event) {
                var row = $(this);
                self.unhighlightLines(row.find(`td`)[0].innerHTML);
            }
        );

        $(`#historyTable > tbody:last-child`).append(historyRow);

        self.historyData[drawingName] = new HistoryData(drawnLines, config);
    }

    deleteHistoryRow(drawingName) {
        const self = this;
        const linesList = self.historyData[drawingName].lines;

        for (let i = 0; i < linesList.length; i++) {
            $(`#${linesList[i].id}`).remove();
        }

        $(`#${self.drawingNameId(drawingName)}`).remove();
    }

    highlightLines(historyKey) {
        const self = this;
        const linesList =  self.historyData[historyKey].lines;
        for (let i = 0; i < linesList.length; i++) {
            const line = linesList[i];
            $(`#drawingCanvas #${line.id}`).css({stroke: `red`});
        }
    }

    unhighlightLines(historyKey) {
        const self = this;
        const linesList =  self.historyData[historyKey].lines;
        for (let i = 0; i < linesList.length; i++) {
            const line = linesList[i];
            $(`#drawingCanvas #${line.id}`).css({stroke: `black`});
        }
    }

    clearHistory() {
        $(`#historyTable > tbody`).empty();
        this.historyData = {};
    }

    drawingNameId(name) {
        return name.split(' ').join('');
    }
}
