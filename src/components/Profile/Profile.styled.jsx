import styled from "@emotion/styled";

export const Wraper = styled.div`
width:300px;
   
    margin: 0 auto;

border-left: 1px solid rgba(238, 238, 238, 1);
border-right: 1px solid rgba(238, 238, 238, 1);
border-bottom: 1px solid rgba(238, 238, 238, 1);

`;

export const Description = styled.div`
text-align: center;
`;

export const Avatar = styled.img`
width: 100px;
border-radius: 50%;
`;


export const Name = styled.p`
color: black;
font-size: 18px;
font-weight: 700;
line-height: 2;
letter-spacing: 0.06em;
`;

export const Tag = styled.p`
color: grey;
font-size: 14px;
font-weight: 300;
line-height: 2;
letter-spacing: 0.06em;
`;

export const Location = styled.p`
color: grey;
font-size: 14px;
font-weight: 300;
line-height: 2;
letter-spacing: 0.06em;
`;

export const Stats = styled.ul`

display: flex;
justify-content: center;



padding: 0px;
margin: 0px;
list-style: none;
`;

export const Label = styled.span`
color: grey;
font-size: 14px;
font-weight: 300;
line-height: 2;
letter-spacing: 0.06em;
`;

export const Quantity = styled.span`
color: black;
font-size: 18px;
font-weight: 700;
line-height: 2;
letter-spacing: 0.06em;
`
;

export const ItemOfStats = styled.li`

display: flex;
flex-direction: column;
background:  rgba(238, 238, 238, 1);
padding: 0px;
border: 1px solid black;
align-items: center;
width: 100%;
`;

