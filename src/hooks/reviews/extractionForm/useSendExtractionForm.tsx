import axios from "../../../interceptor/interceptor";

interface TextualProps{
    question: string;
    questionId: string;
    userCode: string;
    reviewId: string;
}

interface PickListProps{
    question: string;
    questionId: string;
    userCode: string;
    reviewId: string;
    options: string[];
}

interface NumberScaleProps{
    question: string;
    questionId: string;
    userCode: string;
    reviewId: string;
    lower: number,
    higher: number
}

interface LabeledProps{
    question: string;
    questionId: string; //uuid
    userCode: string;
    reviewId: string;
    scales: Record<string, number>;
}

const useSendExtractionForm = (adress: string) => {
    async function sendTextualQuestion({question, userCode, reviewId}: TextualProps){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/textual`;
        const data = {
            code: userCode,
            description: question
        }

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function sendPickListQuestion({question, userCode, reviewId, options}: PickListProps){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/pick-list`;
        const data = {
            code: userCode,
            description: question,
            options
        }

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function sendNumberScaleQuestion({question, userCode, reviewId, lower, higher}: NumberScaleProps){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/number-scale`;
        console.log(typeof(lower));
        
        const data = {
            code: userCode,
            description: question,
            lower: lower,
            higher: higher
        }

        console.log(lower);

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function sendLabeledListQuestion({question, userCode, reviewId, scales}: LabeledProps) {
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/labeled-scale`;
        const data = {
            code: userCode,
            description: question,
            scales
        }

        try{
            let response = await axios.post(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function updateTextualQuestion({question, userCode, reviewId}: TextualProps, serverId: string | null, questionType: string){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/${serverId}`;
        const data = {
            questionType: questionType,
            code: userCode,
            description: question
        }

        try{
            let response = await axios.put(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function updatePickListQuestion({question, userCode, reviewId, options}: PickListProps, serverId: string | null, questionType: string){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/${serverId}`;
        const data = {
            questionType: questionType,
            code: userCode,
            description: question,
            options
        }

        try{
            let response = await axios.put(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function updateNumberScaleQuestion({question, userCode, reviewId, lower, higher}: NumberScaleProps, serverId: string | null){
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/${serverId}`;
        console.log(typeof(lower));
        
        const data = {
            code: userCode,
            description: question,
            lower: lower,
            higher: higher,
            questionType: 'NUMBERED_SCALE'
        }

        try{
            let response = await axios.put(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    async function updateLabeledListQuestion({question, userCode, reviewId, scales}: LabeledProps, serverId: string | null) {
        let url = `http://localhost:8080/api/v1/systematic-study/${reviewId}/protocol/${adress}/${serverId}`;
        const data = {
            code: userCode,
            description: question,
            scales,
            questionType: 'LABELED_SCALE'
        }

        try{
            let response = await axios.put(url, data, {withCredentials: true});
            console.log(response);
            return response.data.questionId;
        } catch(err){
            console.log(err);
        }
    }

    return { sendTextualQuestion, sendPickListQuestion, sendNumberScaleQuestion, sendLabeledListQuestion, updateTextualQuestion, updatePickListQuestion, updateNumberScaleQuestion, updateLabeledListQuestion};
}

export default useSendExtractionForm;