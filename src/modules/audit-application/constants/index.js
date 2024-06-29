export const AUDIT_FORM = {
  HEADER : 'Audit Information',
  SUBMIT : 'Submit',
  MALE   : "Male",
  FEMALE : "Female"
}

export const AUDIT_FORM_DATA = {
    ENTITY_NAME: {
      HEADER: 'Entity Name',
      FIELD: 'entityName'
    },
    AUDIT_ID: {
      HEADER: 'Audit ID',
      FIELD: 'auditId'
    },
    AUDIT_DATE: {
      HEADER: 'Audit Date',
      FIELD: 'auditDate'
    },
    AUDITOR_NAME: {
      HEADER: 'Auditor Name',
      FIELD: 'auditorName'
    },
    GENDER: {
      HEADER: 'Gender',
      FIELD: 'gender'
    },
    AUDIT_TYPE: {
      HEADER: 'Audit Type',
      FIELD: 'auditType'
    },
    LOCATION: {
      HEADER: 'Location',
      FIELD: 'location'
    },
    ENTITY_TYPE: {
      HEADER: 'Entity Type',
      FIELD: 'entityType'
    },
    FINDINGS_DETAILS: {
      HEADER: 'Findings Details',
      FIELD: 'findingsDetails'
    },
    SEVERITY: {
      HEADER: 'Severity',
      FIELD: 'severity'
    },
    RECOMMENDATIONS: {
      HEADER: 'Recommendations',
      FIELD: 'recommendations'
    },
    ACTION_ITEMS: {
      HEADER: 'Action Items',
      FIELD: 'actionItems'
    },
    RESPONSIBLE_PERSON: {
      HEADER: 'Responsible Person',
      FIELD: 'responsiblePerson'
    },
    DUE_DATES: {
      HEADER: 'Due Dates',
      FIELD: 'dueDates'
    },
    APPROVAL_DATE: {
      HEADER: 'Approval Date',
      FIELD: 'approvalDate'
    },
    COMMENTS: {
      HEADER: 'Comments',
      FIELD: 'comments'
    },
    APPROVER_NAME: {
      HEADER: 'Approver Name',
      FIELD: 'approverName'
    }
  };

  export const CITIES = [
    'Bangalore',
    'Hyderabad',
    'Gurgaon',
    'Noida',
    'Ahmedabad',
    'Mumbai',
    'Pune',
  ];

  export const AUDIT_TYPES = {
    FINANCIAL: 'Financial Audit',
    INTERNAL: 'Internal Audit' ,
    COMPILANCE: 'Compliance Audit' ,
    OPERATIONAL: 'Operational Audit' ,
    FORENSIC: 'Forensic Audit' ,
  };

  export const AUDIT_TYPE = [
    { value: 'financialAudit', label: AUDIT_TYPES.FINANCIAL },
    { value: 'internalAudit', label: AUDIT_TYPES.INTERNAL },
    { value: 'complianceAudit', label: AUDIT_TYPES.COMPILANCE },
    { value: 'operationalAudit', label: AUDIT_TYPES.OPERATIONAL },
    { value: 'forensicAudits', label: AUDIT_TYPES.FORENSIC },
  ];
  

  export const initialFormData = {
    auditId: '',
    auditDate: '',
    auditorName: '',
    gender: '',
    auditType: '',
    entityName: '',
    entityType: '',
    location: '',
    findingsDetails: '',
    severity: '',
    recommendations: '',
    actionItems: '',
    responsiblePerson: '',
    dueDates: '',
    comments: '',
    approverName: '',
    approvalDate: '',
  };

  export const dummyData = [
    {
      auditId: 'A001',
      auditDate: '2023-01-15',
      auditorName: 'John Doe',
      gender: 'Male',
      auditType: 'Financial Audit',
      entityName: 'XYZ Corporation',
      entityType: 'Corporation',
      location: 'Bangalore',
      findingsDetails: 'Found discrepancies in financial records.',
      severity: 'High',
      recommendations: 'Implement stricter financial controls.',
      actionItems: 'Assign task to finance team.',
      responsiblePerson: 'Jane Smith',
      dueDates: '2023-02-28',
      comments: 'Meeting scheduled for follow-up.',
      approverName: 'Michael Brown',
      approvalDate: '2023-01-20',
    },
    {
      auditId: 'A002',
      auditDate: '2023-02-20',
      auditorName: 'Alice Johnson',
      gender: 'Female',
      auditType: 'Operational Audit',
      entityName: 'ABC Ltd.',
      entityType: 'Limited Company',
      location: 'Hyderabad',
      findingsDetails: 'Operational inefficiencies identified in logistics.',
      severity: 'Medium',
      recommendations: 'Restructure logistics operations.',
      actionItems: 'Create new logistics plan.',
      responsiblePerson: 'Peter Green',
      dueDates: '2023-03-31',
      comments: 'Follow-up meeting next week.',
      approverName: 'Emily White',
      approvalDate: '2023-02-25',
    },
    {
        auditId: 'A003',
        auditDate: '2023-03-10',
        auditorName: 'Robert Clark',
        gender: 'Male',
        auditType: 'Internal Audit',
        entityName: 'Tech Solutions Inc.',
        entityType: 'Technology Firm',
        location: 'Pune',
        findingsDetails: 'Security vulnerabilities in network infrastructure.',
        severity: 'High',
        recommendations: 'Upgrade firewall and encryption protocols.',
        actionItems: 'Schedule security patching.',
        responsiblePerson: 'David Lee',
        dueDates: '2023-04-15',
        comments: 'Security team to address findings immediately.',
        approverName: 'Sophia Martinez',
        approvalDate: '2023-03-15',
      },
      {
        auditId: 'A004',
        auditDate: '2023-04-05',
        auditorName: 'Ella Adams',
        gender: 'Female',
        auditType: 'Compliance Audit',
        entityName: 'Regulatory Solutions Ltd.',
        entityType: 'Consultancy',
        location: 'Bangalore',
        findingsDetails: 'Non-compliance issues in regulatory filings.',
        severity: 'Medium',
        recommendations: 'Revise compliance checklist.',
        actionItems: 'Submit revised filings to regulators.',
        responsiblePerson: 'Daniel Harris',
        dueDates: '2023-05-15',
        comments: 'Legal team to handle compliance issues.',
        approverName: 'Oliver Taylor',
        approvalDate: '2023-04-10',
      },
      {
        auditId: 'A005',
        auditDate: '2023-05-12',
        auditorName: 'Sarah Brown',
        gender: 'Female',
        auditType: 'Financial Audit',
        entityName: 'Quality Foods Ltd.',
        entityType: 'Food Production',
        location: 'Noida',
        findingsDetails: 'Quality control issues in food processing.',
        severity: 'Low',
        recommendations: 'Implement stricter quality control measures.',
        actionItems: 'Train production staff on quality standards.',
        responsiblePerson: 'Michael Johnson',
        dueDates: '2023-06-30',
        comments: 'Quality team to oversee implementation.',
        approverName: 'Lily Wilson',
        approvalDate: '2023-05-20',
      },
  ]

  export const PIE_COLORS = ["#0088FE", "#FFBB28"];