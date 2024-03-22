import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import paginationBtnStyle from '../../styles/sharedStyles/paginationBtn.module.css';

const PaginationBtn = ({goToPreviousPage,goToNextPage,renderPageNumbers}) => {
 
  return (
    <div className={paginationBtnStyle.pagination_btn_group}>
      <button className={paginationBtnStyle.pagination_btn} onClick={goToPreviousPage}>
        <i>
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>
      </button>
      {renderPageNumbers()}
      <button className={paginationBtnStyle.pagination_btn} onClick={goToNextPage}>
        <i>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>
      </button>
    </div>
  );
};

export default PaginationBtn;
