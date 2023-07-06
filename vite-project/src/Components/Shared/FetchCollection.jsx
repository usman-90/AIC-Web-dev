import  { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const useFetchCollection = (collectionName  ) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = async() => {
    setIsLoading(true);
    try {
        const q = query(collection(db, "events"), where("type", "==", collectionName));
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data); // Assuming you have a 'setData' function to update the state with the fetched data
      } catch (error) {
        console.error("Error:", error);
      }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return {
    data,
    isLoading,
  };
};

export default useFetchCollection;
