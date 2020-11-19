import styled from 'styled-components';
import hatchBackdrop from './img/hatch_backdrop.jpg';

export const StyledHatch = styled.div`
    padding-top: 100%;
    position: relative;
    cursor: pointer;

    .front {
        background: center / cover url(${props => props.background});
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        border-width: 0.15rem;

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Dancing Script", cursive;
            color: #fff;
            text-shadow: 3px 3px #ce3030;
            //-webkit-text-stroke: 2px #ff0000;
            padding: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            //background: rgba(255, 53, 58, 1);
            background: rgba(13, 96, 60, 0.7); 
            font-weight: 700;
            font-size: 4rem;
        }

        &.open {
            transform: rotateY(180deg);
        }
    }

    .back {
        position: absolute;
        background: center / cover url(${hatchBackdrop});
        top: 0px;
        left: 0px;
        z-index: 1;
        transform: rotateY(180deg);

        &.open {
            z-index: 2;
            transform: rotateY(0deg);    
        }
        
        p {
            font-family: 'Roboto Slab', serif;
            color: #fff;
            padding: 10px;
            font-size: 1.4rem;
            text-align: center;
        }
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        transform-style: preserve-3d;
        border-radius: 20px;
        border: 1px solid #fff;
        box-sizing: border-box;
    }
`;