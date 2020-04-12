import React from 'react';
import { IoIosClose } from 'react-icons/io';
import * as S from './Modal.styled';

const Modal = ({ modalInfo, setIsModalVisible }) => {
  const { location, name, phone, cell } = modalInfo;

  const userName = `${name.first} ${name.last}`;

  const userInfo = [
    {
      label: 'Street:',
      info: `${location.street.name},  ${location.street.number}`,
    },
    {
      label: 'City:',
      info: `${location.city}`,
    },
    {
      label: 'State:',
      info: `${location.state}`,
    },
    {
      label: 'Postcode:',
      info: `${location.postcode}`,
    },
    {
      label: 'Phone:',
      info: `${phone}`,
    },
    {
      label: 'Cell:',
      info: `${cell}`,
    },
  ];

  return (
    <S.Background>
      <S.Modal>
        <S.ModalHeader>
          <S.ModalTitle data-testid='test'>{`Aditional information from ${userName}`}</S.ModalTitle>
          <S.CloseBtn type='button' onClick={() => setIsModalVisible(false)}>
            <IoIosClose />
          </S.CloseBtn>
        </S.ModalHeader>
        <S.Info>
          {userInfo.map((data) => (
            <div key={data.info}>
              <S.Label>{data.label}</S.Label>
              <p>{data.info}</p>
            </div>
          ))}
        </S.Info>
      </S.Modal>
    </S.Background>
  );
};
export default Modal;
