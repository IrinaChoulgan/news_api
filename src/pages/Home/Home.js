import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return <h1>{t('homeText')}</h1>;
}

export default Home;