import useAuth from '../shared/hooks/useAuth';
import SearchHookForm from '../components/buscador/SearchHookForm';
import StarRating from '../components/StarRating';

function Home() {
  const { logOut } = useAuth();
  return (
    <>
      <div className="navigacion">
        <h1>HOME</h1>
        <SearchHookForm></SearchHookForm>
        <button onClick={logOut}>Cerrar sesión</button>
      </div>

      <div>
        <StarRating />
      </div>
    </>
  );
}

export default Home;
