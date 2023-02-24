import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return <h1>{t('profileText')}</h1>;
};

export default Profile;
