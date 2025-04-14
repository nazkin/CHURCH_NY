import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { styles } from "./style";
import { Table, TD, TH, TR } from "@ag-media/react-pdf-table";
import React from "react";
import { Box } from "@mui/material";

export const tableData = [
  {
    description: "Web Design Service",
    quantity: 1,
    unitPrice: 1500.0,
    total: 1500.0,
  },
  {
    description: "Hosting Setup",
    quantity: 1,
    unitPrice: 250.0,
    total: 250.0,
  },
];

export const totalData = [
  {
    label: "Subtotal",
    value: "$1,750.00",
  },
  {
    label: "Tax (10%)",
    value: "$175.00",
  },
  {
    label: "Total",
    value: "$1,925.00",
  },
];

export function Invoice2() {
  const InvoicePDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, styles.textBold]}>INVOICE</Text>
            <Text>Invoice #INV-2024-001</Text>
          </View>
          <View style={styles.spaceY}>
            <Text style={styles.textBold}>Company Name</Text>
            <Text>123 Business Street</Text>
            <Text>City, State 12345</Text>
          </View>
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Bill To:</Text>
          <Text>Client Name</Text>
          <Text>Client Address</Text>
          <Text>City, State ZIP</Text>
        </View>

        {/* Render the table */}
        <Table style={styles.table}>
          <TH style={[styles.tableHeader, styles.textBold]}>
            <TD style={styles.td}>Description</TD>
            <TD style={styles.td}>Quantity</TD>
            <TD style={styles.td}>Unit Price</TD>
            <TD style={styles.td}>Total</TD>
          </TH>
          {tableData.map((item, index) => (
            <TR key={index}>
              <TD style={styles.td}>{item.description}</TD>
              <TD style={styles.td}>{item.quantity}</TD>
              <TD style={styles.td}>${item.unitPrice.toFixed(2)}</TD>
              <TD style={styles.td}>${item.total.toFixed(2)}</TD>
            </TR>
          ))}
        </Table>

        <View style={styles.totals}>
          <View
            style={{
              minWidth: "256px",
            }}
          >
            {totalData.map((item) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Text style={item.label === "Total" ? styles.textBold : {}}>
                  {item.label}
                </Text>
                <Text style={item.label === "Total" ? styles.textBold : {}}>
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
  return (
    <Box my="10px" mx="auto">
      <Box height="500px" width="100%">
        <PDFViewer width="100%" height="100%">
          <InvoicePDF />
        </PDFViewer>
      </Box>
      <Box mt="16px" display="flex" justifyContent="center">
        <PDFDownloadLink document={<InvoicePDF />} fileName="invoice.pdf">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Download PDF
          </button>
        </PDFDownloadLink>
      </Box>
    </Box>
  );
}
