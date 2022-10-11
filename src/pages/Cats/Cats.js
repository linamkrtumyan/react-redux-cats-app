import React, { useEffect } from "react";
import { fetchCats } from "../../store";
import { connect } from "react-redux";
import ImageBox from "../../components/main/imageBox/ImageBox";
import { useParams } from "react-router-dom";
import "./cats.css";
import { changePage } from "../../store/cats/actions";
import Loading from "../../components/main/loading/Loading";

function Cats({ fetchCats, cats, changePage, page, loading }) {
  let { id } = useParams();

  useEffect(() => {
    fetchCats(id);
  }, [id, page]);

  return (
    <div className="page-wrapper">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="images-container">
            {cats.length > 0 ? (
              cats?.map((cat) => {
                return <ImageBox key={cat.id} cat={cat} />;
              })
            ) : (
              <p>No data</p>
            )}
          </div>

          <div className="btn-container">
            <button className="more-btn" onClick={() => changePage()}>
              {" "}
              More
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    cats: state.catsReducer.cats,
    page: state.catsReducer.page,
    loading: state.catsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: (id) => dispatch(fetchCats(id)),
    changePage: () => dispatch(changePage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Cats));
