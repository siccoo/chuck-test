import CardContainer from '@/components/CardContainer';
import CustomerDetailsContainer from '@/components/CustomerDetailsContainer';
import GraphContainer from '@/components/GraphContainer';
import MenuContainer from '@/components/MenuContainer';

const Page = () => {
  return (
    <div>
      <CardContainer />
      <GraphContainer />
      <CustomerDetailsContainer />
      <MenuContainer />
    </div>
  )
}

export default Page;
