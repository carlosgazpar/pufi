import '@/styles/common/Breadcrumb.scss'

const Breadcrumb = ({ text }) => {
  return (
    <div className="breadcrumb">
      <h4>{text}</h4>
    </div>
  );
};

export default Breadcrumb;
