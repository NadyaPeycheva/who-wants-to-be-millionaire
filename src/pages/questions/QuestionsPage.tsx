import { connect } from "react-redux";
import './questionsPage.scss'

import * as questionTypesActions from '../../actions/questionsTypesActions';

const QuestionsPage=(props:any)=>{
    console.log("question type",props.questionTypes.categoryTypes);
    console.log("question type",props.questionTypes.difficulty);
    

    return <div className="background-questions-container">this is questions page</div>
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        questionTypes: state.questionTypes,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // getQuestionTypes: (type:{name:string,id:number}) => dispatch(questionTypesActions.getQuestionTypes(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);