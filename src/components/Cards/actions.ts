
import ClickParam from '../../types/clickParam';


  
  const onClickEdit = (param: ClickParam) => {
    console.log("element", param.e?.currentTarget.id);
  };
  const onClickDelete = (param: ClickParam) => {
    console.log("element", param.e?.currentTarget.id);
    if (!param.e) return;
    param.setInitLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/delete/?id=${param.e?.currentTarget.id}`, { method: 'DELETE' })
        .then(() => getData(param));
  };
  const getData = ({setInitLoading, setList}: ClickParam) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/list`)
    .then(response => response.json())
    .then(data => {
      setInitLoading(false);
      setList(data.items);
    });
  };

  export {
    onClickEdit, onClickDelete, getData
  }