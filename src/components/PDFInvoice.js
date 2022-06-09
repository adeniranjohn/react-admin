import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {

      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  




const PDFInvoice = () => {

    return (
        <PDFViewer style={styles.viewer}>

      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Generate Receipt</Text>
          </View>
          <View style={styles.section}>
          
          </View>
        </Page>
      </Document>
    </PDFViewer>
    )
}


export default PDFInvoice;