import CardContainer from '@/components/CardContainer';
import CustomerDetailsContainer from '@/components/CustomerDetailsContainer';
import GraphContainer from '@/components/GraphContainer';

const page = () => {
  return (
    <div>
      <CardContainer />
      <GraphContainer />
      <CustomerDetailsContainer />
    </div>
  )
}

export default page