// Don't allow H1 as it is already in the page
const NoH1 = (props: any) => {
  return <h2 {...props} />;
};

export default NoH1;
