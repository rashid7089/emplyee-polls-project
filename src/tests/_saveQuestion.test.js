import { _saveQuestion } from "../utils/_DATA";

describe("saveQuestion", () => {
    it("should save a new question", async() => {

        const question = {
            optionOneText: "my name is better",
            optionTwoText: "your name is better",
            author:"sarahedo"
        };

        const expectedAction = {
            id: 0,
            timestamp: 0,
            author:question.author,
            optionOne: {
              votes: [],
              text: question.optionOneText,
            },
            optionTwo: {
              votes: [],
              text: question.optionTwoText,
            }
          };

        const response = await _saveQuestion(question);
        const result = {  ...response, id : 0, timestamp: 0};
        
        expect(result).toEqual(expectedAction);
    });

    
    it("should return an error", async() => {
        const question = {
            optionOneText: "my name is better",
            optionTwoText: "your name is better",
        }
        return expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});