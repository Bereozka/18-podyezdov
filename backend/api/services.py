from docx import Document


def create_word_file(
    workData,
    materialData,
):
    print(workData)
    print(materialData)
    doc = Document("files/template.docx")
    table = doc.tables[0]
    for work in workData:
        row = table.add_row()
        print(help(row.cells[0].merge))
        if work["type"] == "filled":
            row.cells[1].text = work["data"]["name"]
            row.cells[2].text = work["data"]["units"]
            row.cells[3].text = work["data"]["count"]
            row.cells[4].text = work["data"]["price"]
            row.cells[5].text = work["data"]["total"]
        elif work["type"] == "subtitle":
            pass
    doc.save("files/finish.docx")
