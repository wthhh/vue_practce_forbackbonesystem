import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install (Vue, options) {
    Vue.prototype.getPdf = function () {
      var title = this.htmlTitle
      html2Canvas(document.querySelector('#pdfDom'), {
        dpi:172,
        allowTaint: true,
      }).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        //console.log(contentHeight)
        //console.log(contentWidth)
        let pageHeight = contentWidth / 592.28 * 841.89
        //console.log(pageHeight)
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 592.28
        let imgHeight = 595.28 / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        // console.log(pageData)
        let PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      }
      )
    }
  }
}