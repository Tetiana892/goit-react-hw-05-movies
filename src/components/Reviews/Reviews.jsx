import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { params } = useParams();
  console.log(params);
  return <>Reviews</>;
};

export default Reviews;
