import styled from 'styled-components'
import {device} from '../../../theme'

export const ClientWrap = styled.li `
    flex-basis: 50%;
    text-align: center;
    padding-top:5%;
    padding-bottom:5%;
    height: 150px;
    @media ${device.small}{
        height: 150px;
    }
    a{
        display: block;
        &:hover{
            background-color: #fff;
            transform: scale(1.1);
            img{
                opacity: 1;
            }
        }
        img{
            opacity: 0.7;
            transition: 0.3s;
            max-height: 110px;
            max-width: 150px;
            @media ${device.small}{
                max-height: 70px;
                max-width: 70px;
            }
        }
    }
`;