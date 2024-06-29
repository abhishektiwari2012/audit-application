import { AUDIT_FORM } from "../constants";

export const maleFemaleNumber = (auditData) => {
  let maleCount = 0;
  let femaleCount = 0;
  if(auditData && auditData?.length){
    auditData.forEach((x) => {
        if(x.gender === AUDIT_FORM.MALE) maleCount++;
        if(x.gender === AUDIT_FORM.FEMALE) femaleCount++;
    })
  }
  return {maleCount, femaleCount};
};

export const locationCount = (auditData) => {
    if(auditData && auditData?.length){
        const locationData = auditData.reduce((acc, audit) => {
            const location = audit.location || 'Unknown';
            acc[location] = (acc[location] || 0) + 1;
            return acc;
          }, {});
        
          const locationChartData = Object.keys(locationData).map(key => ({
            name: key,
            count: locationData[key],
          }));
          return locationChartData;
    }
    return {name:'',count:0};
}


export const composedData = (auditData) => {
  const auditTypeMap = {};
  if(auditData && auditData?.length){
    auditData.forEach((audit)=>{
        if (!auditTypeMap[audit.auditType]) {
            auditTypeMap[audit.auditType] = {
              name: audit.auditType,
              numberOfAudit: 0,
              femaleCount: 0,
            };
          } 
          auditTypeMap[audit.auditType].numberOfAudit++; 
          if (audit.gender === 'Female') {
            auditTypeMap[audit.auditType].femaleCount++;
          }
    })
  }
  const valuesArray = Object.values(auditTypeMap);
  console.log('valuesArray',valuesArray);
  return valuesArray;
}