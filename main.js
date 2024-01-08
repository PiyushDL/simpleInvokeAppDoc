const pdfViewerContainer = document.getElementById('pdfViewerContainer');
const docViewerContainer = document.getElementById('docViewerContainer');
const docxViewerContainer = document.getElementById('docxViewerContainer');
const pdfView = document.getElementById('pdf');
const docView = document.getElementById('doc');
const docxView = document.getElementById('docx');


function preview(value) {
    if (value === 'pdf') {
        pdfViewerContainer.style.display = 'block'
        pdfView.style.display = 'block'
    } else if (value === 'doc') {
        docViewerContainer.style.display = 'block'
        docView.style.display = 'block'
    } else if (value === 'docx') {
        docxViewerContainer.style.display = 'block'
        docxView.style.display = 'block'
    }
}

function redirect() {
    window.open('http://localhost:3000/rfelogs/create-rfelog?invokeAppId=4612376', '_blank')
    closeViewer()
}

function closeViewer() {
    pdfViewerContainer.style.display = 'none';
    docViewerContainer.style.display = 'none';
    docxViewerContainer.style.display = 'none';
    docView.style.display = 'none';
    docxView.style.display = 'none';
    pdfView.style.display = 'none';
}
