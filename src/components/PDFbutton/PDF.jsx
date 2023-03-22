import React from "react";
import EXAMPLE_IMG from "../../images/profile-pic.jpeg";
import { Document, Page, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
  },
});

const PDF = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Image src={EXAMPLE_IMG} />
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
