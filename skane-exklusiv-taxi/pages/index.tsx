import { GetStaticProps } from 'next';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  // Define any props specific to the Swedish version here
}

const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('welcomeMessage')}</h1>
      {/* Add your content for the Swedish version here */}
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Implement any necessary data fetching for the Swedish version here
  return {
    props: {},
  };
};

export default Home;
