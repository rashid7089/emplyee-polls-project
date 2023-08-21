import { _saveQuestionAnswer } from '../utils/_DATA';

describe("saveQuestionAnswer", () => {
    it("should return a true (ensuring that question has saved)", async() => {
        const testData = {
            authedUser: "sarahedo",
            question_id: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        }
        const response = await _saveQuestionAnswer(testData);
        expect(response).toEqual(true);
    });

    it("should return an error when one of the feild is not provided", async() => {
        const testData = {
            authedUser: "sarahedo",
            question_id: "8xf0y6ziyjabvozdd253nd",
        }
        await expect(_saveQuestionAnswer(testData)).rejects.toEqual("Please provide authedUser, question_id, and answer");
    })
})