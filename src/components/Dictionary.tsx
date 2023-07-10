import useWord from "../hooks/useWord";
import Error from "./Error";
import Layout from "./Layout";
import Loading from "./Loading";
import Word from "./Word";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Dictionary = () => {
  const { wordData, requestStatus } = useWord();

  return (
    <div className="text-textColor">
      <Layout>
        <div>
          {requestStatus == "loading" ? (
            <Loading />
          ) : requestStatus == "error" ? (
            <Error />
          ) : !wordData.word ? (
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-2xl mb-4">Welcome to the Dictionary app</h2>
              <p className="text-xl mb-6">Search a word</p>
              <MdOutlineScreenSearchDesktop className="text-8xl" />
            </div>
          ) : (
            <Word />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Dictionary;
