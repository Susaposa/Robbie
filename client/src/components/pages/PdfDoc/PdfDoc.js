import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = ({myDet}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
    <Text>{myDet.name}</Text>
    <Text>{myDet.gender}</Text>
    {/* <Text>{age}</Text>
    <Text>Education</Text>
    <Text>{ed1}</Text>
    <Text>{ed2}</Text>
    <Text>{ed3}</Text> */}
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;