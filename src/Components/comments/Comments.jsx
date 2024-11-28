import React from 'react'
import CommentsBox from './CommentsBox';

const data = [
    {
        username: "Akshay Saini",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
            {
                username: "Deepika Padukone",
                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
        ],
    },
    {
        username: "Elon Musk",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
            {
                username: "Deepika Padukone",
                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                    {
                        username: "Deepika Padukone",
                        comment:
                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                            {
                                username: "Deepika Padukone",
                                comment:
                                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                replies: [
                                    {
                                        username: "Deepika Padukone",
                                        comment:
                                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                        replies: [
                                            {
                                                username: "Deepika Padukone",
                                                comment:
                                                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                                replies: [
                                                    {
                                                        username: "Deepika Padukone",
                                                        comment:
                                                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        username: "Deepika Padukone",
                        comment:
                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                    },
                ],
            },
            {
                username: "Deepika Padukone",
                comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
        ],
    },
    {
        username: "Sachin Tendulkar",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    },
];

const Comments = () => {
    return (
        <CommentsBox data={data} />
    )
}

export default Comments