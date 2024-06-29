import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Paper, Typography, Grid, Button, Box, Divider } from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import usePreviewStyles from '../../styles/preview.styles';

const Preview = () => {
  const classes = usePreviewStyles(); // Use the styles hook

  const auditData = useSelector((state) => state.audit.auditData);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Audit Report', 14, 22);
    doc.setFontSize(12);

    auditData.forEach((audit, index) => {
      if (index > 0) doc.addPage();
      doc.text(`Audit ${index + 1}`, 14, 32 + index * 10);
      doc.autoTable({
        startY: 36 + index * 10,
        head: [['Field', 'Value']],
        body: Object.entries(audit).map(([key, value]) => [key, value.toString()]),
        theme: 'striped',
        styles: { fontSize: 10 },
      });
    });

    doc.save('audit-report.pdf');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" align="center" gutterBottom className={classes.header}>
          Preview of Submitted Audit Data
        </Typography>
        <Box>
          {auditData.map((audit, index) => (
            <Paper key={index} className={classes.auditPaper}>
              <Typography variant="h6" gutterBottom className={classes.auditTitle}>
                Audit {index + 1}
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(audit).map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key} className={classes.gridItem}>
                    <Typography variant="body2" color="textSecondary">
                      {key}
                    </Typography>
                    <Typography variant="body1">{String(value)}</Typography>
                    <Divider className={classes.divider} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          ))}
          <Button variant="contained" color="primary" onClick={handlePrint} className={classes.button}>
            Download PDF
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Preview;
