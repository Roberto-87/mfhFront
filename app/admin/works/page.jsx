const { default: FormUploadWork } = require("../../components/FormUploadWork");

FormUploadWork

const Works = () => {
    return (
      <div className={{display:'flex', flexDirection:'row' }}>
        <FormUploadWork></FormUploadWork>
      </div>
    );
  };
  
  module.exports = Works;
  