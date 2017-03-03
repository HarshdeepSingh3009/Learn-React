import React from 'react';
import ContestPreview from './ContestPreview';


const ContentList = ({contests, onContestClick}) => (
    <div className = "ContentList"> 
            {Object.keys(contests).map(contestId => 
             <ContestPreview  onClick = {onContestClick}
             key={contestId} id= {contestId} {...contests[contestId]}/>
            )}
    </div>
);

ContentList.propTypes={
    contests:React.PropTypes.object,
    onContestClick: React.PropTypes.func.isRequired,
};

export default ContentList;