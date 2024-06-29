import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAuditData } from '../../../../store/actions/auditActions';
import { AUDIT_FORM, AUDIT_FORM_DATA, AUDIT_TYPE, CITIES, initialFormData } from '../../constants';
import {
  Button,
  Grid,
  Typography,
  Container,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputField from '../input-field';

const AuditForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAuditData(formData));
    navigate('/Dashboard'); // Redirect to admin dashboard after form submission
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
         {AUDIT_FORM.HEADER}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <InputField
              name={AUDIT_FORM_DATA.AUDIT_ID.FIELD}
              label={AUDIT_FORM_DATA.AUDIT_ID.HEADER}
              value={formData.auditId}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.AUDIT_DATE.FIELD}
              label={AUDIT_FORM_DATA.AUDIT_DATE.HEADER}
              type="date"
              value={formData.auditDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.AUDITOR_NAME.FIELD}
              label={AUDIT_FORM_DATA.AUDITOR_NAME.HEADER}
              value={formData.auditorName}
              onChange={handleChange}
              required
            />
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth required>
                <FormLabel component="legend">{AUDIT_FORM_DATA.GENDER.HEADER}</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>{AUDIT_FORM_DATA.AUDIT_TYPE.HEADER}</InputLabel>
                <Select
                  name="auditType"
                  value={formData.auditType}
                  onChange={handleChange}
                  fullWidth
                >
                  {AUDIT_TYPE.map((type) => (
                    <MenuItem key={type.value} value={type.label}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>{AUDIT_FORM_DATA.LOCATION.HEADER}</InputLabel>
                <Select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  fullWidth
                >
                  {Object.values(CITIES).map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <InputField
              name={AUDIT_FORM_DATA.ENTITY_NAME.FIELD}
              label={AUDIT_FORM_DATA.ENTITY_NAME.HEADER}
              value={formData.entityName}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.ENTITY_TYPE.FIELD}
              label={AUDIT_FORM_DATA.ENTITY_TYPE.HEADER}
              value={formData.entityType}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.FINDINGS_DETAILS.FIELD}
              label={AUDIT_FORM_DATA.FINDINGS_DETAILS.HEADER}
              value={formData.findingsDetails}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.SEVERITY.FIELD}
              label={AUDIT_FORM_DATA.SEVERITY.HEADER}
              value={formData.severity}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.RECOMMENDATIONS.FIELD}
              label={AUDIT_FORM_DATA.RECOMMENDATIONS.HEADER}
              value={formData.recommendations}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.ACTION_ITEMS.FIELD}
              label={AUDIT_FORM_DATA.ACTION_ITEMS.HEADER}
              value={formData.actionItems}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.RESPONSIBLE_PERSON.FIELD}
              label={AUDIT_FORM_DATA.RESPONSIBLE_PERSON.HEADER}
              value={formData.responsiblePerson}
              onChange={handleChange}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.DUE_DATES.FIELD}
              label={AUDIT_FORM_DATA.DUE_DATES.HEADER}
              type="date"
              value={formData.dueDates}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.APPROVAL_DATE.FIELD}
              label={AUDIT_FORM_DATA.APPROVAL_DATE.HEADER}
              type="date"
              value={formData.approvalDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <InputField
              name={AUDIT_FORM_DATA.COMMENTS.FIELD}
              label={AUDIT_FORM_DATA.COMMENTS.HEADER}
              value={formData.comments}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
            <InputField
              name={AUDIT_FORM_DATA.APPROVER_NAME.FIELD}
              label={AUDIT_FORM_DATA.APPROVER_NAME.HEADER}
              value={formData.approverName}
              onChange={handleChange}
              required
            />
            <Grid item xs={12} align="center">
              <Button type="submit" variant="contained" color="primary">
                {AUDIT_FORM.SUBMIT}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AuditForm;
