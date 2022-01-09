import React, { FC } from 'react';
import range from 'lodash/range';
import styled from 'styled-components';

type Props = {
  startSet: React.Dispatch<React.SetStateAction<boolean>>;
  playersSet: React.Dispatch<React.SetStateAction<string[]>>;
  playersCountSet: React.Dispatch<React.SetStateAction<number>>;
  playersCount: number;
  players: string[];
};
const Setup: FC<Props> = ({
  startSet,
  playersSet,
  playersCountSet,
  playersCount,
  players,
}) => {
  return (
    <>
      <svg
        id='Capa_2'
        enableBackground='new 0 0 800 800'
        viewBox='0 0 800 800'
        version='1.1'
        y='0px'
        x='0px'
        className='card'
      >
        <g>
          <g>
            <g>
              <path
                d='m118.87 799c-5.552 0-9.868-4.04-9.868-9.058v-776.42c0-5.013 4.32-9.52 9.87-9.52h564.6c5.55 0 10.53 4.507 10.53 9.525v776.42c0 5.018-4.977 9.058-10.528 9.058h-564.6z'
                fill='#FFFFFF'
              />
              <path d='m683.51 8.033c3.879 0 6.488 2.147 6.488 5.492v776.42c0 3.345-2.649 7.058-6.528 7.058h-564.6c-3.879 0-7.868-3.713-7.868-7.058v-776.42c0-3.34 3.99-5.52 7.87-5.52h565.13m-0.53-6h-564.6c-7.24 0-13.87 4.824-13.87 11.525v776.42c0 6.7 6.631 13.058 13.868 13.058h564.6c7.235 0 12.528-6.357 12.528-13.058v-776.42c0-6.696-5.32-11.52-12.56-11.52h0.03z' />
            </g>
            <g>
              <g>
                <g>
                  <path d='m152.27 54.817c-0.659 0-1.135 0.106-1.429 0.32-0.294 0.212-0.56 0.588-0.794 1.13l-3.246 8.523c-0.259 0.779-0.388 1.332-0.388 1.662 0 0.612 0.159 1.131 0.477 1.556s0.741 0.768 1.27 1.026c0.53 0.259 1.134 0.454 1.817 0.583 0.682 0.13 1.376 0.219 2.082 0.265 0.353 0 0.6 0.128 0.741 0.384 0.141 0.254 0.212 0.521 0.212 0.799 0 0.301-0.071 0.581-0.212 0.834-0.141 0.256-0.388 0.384-0.741 0.384-0.564 0-1.188-0.031-1.87-0.089-0.682-0.06-1.381-0.125-2.099-0.194s-1.44-0.136-2.169-0.193c-0.729-0.059-1.423-0.089-2.082-0.089-1.247 0-2.452 0.094-3.616 0.282s-2.417 0.283-3.757 0.283c-0.283 0-0.507-0.14-0.67-0.418-0.165-0.278-0.248-0.58-0.248-0.904 0-0.254 0.064-0.486 0.194-0.694 0.128-0.208 0.347-0.336 0.653-0.384l1.094-0.14c0.729-0.166 1.381-0.365 1.958-0.601s1.123-0.583 1.641-1.041c0.517-0.46 1.011-1.083 1.482-1.873 0.47-0.787 0.964-1.817 1.482-3.089l16.334-41.131c0.141-0.399 0.529-0.6 1.165-0.6 0.658 0 1.188 0.201 1.588 0.6 1.199 3.085 2.487 6.385 3.863 9.904s2.781 7.097 4.215 10.732c1.436 3.636 2.876 7.25 4.322 10.839 1.447 3.59 2.828 6.985 4.146 10.187 0.564 1.389 1.117 2.465 1.659 3.229 0.541 0.766 1.094 1.348 1.658 1.749 0.564 0.4 1.14 0.67 1.728 0.811s1.211 0.283 1.87 0.423c0.282 0.048 0.488 0.198 0.618 0.453 0.129 0.255 0.194 0.521 0.194 0.799 0 0.302-0.059 0.568-0.176 0.8-0.118 0.231-0.306 0.348-0.564 0.348-0.753 0-1.5-0.024-2.24-0.071-0.742-0.047-1.477-0.119-2.205-0.212-0.706-0.093-1.459-0.165-2.258-0.212-0.8-0.046-1.647-0.07-2.54-0.07-2.047 0-3.952 0.094-5.716 0.282s-3.47 0.283-5.116 0.283c-0.329 0-0.582-0.127-0.758-0.384-0.176-0.253-0.265-0.556-0.265-0.903 0-0.278 0.07-0.522 0.212-0.73 0.141-0.208 0.388-0.336 0.741-0.384 1.646-0.21 2.845-0.505 3.599-0.884 0.776-0.376 1.165-1.178 1.165-2.405 0-0.329-0.036-0.712-0.106-1.149-0.07-0.436-0.224-1.031-0.458-1.786-0.236-0.754-0.57-1.721-1.005-2.899-0.436-1.179-1.018-2.676-1.747-4.493-0.235-0.635-0.559-1.036-0.97-1.201-0.412-0.166-1.076-0.249-1.993-0.249h-12.7zm12.45-2.822c0.658 0 1.111-0.111 1.358-0.334 0.247-0.224 0.252-0.619 0.018-1.182l-6.315-16.899c-0.094-0.258-0.283-0.388-0.564-0.388-0.283 0-0.471 0.13-0.564 0.388l-6.598 16.899c-0.235 0.611-0.259 1.017-0.071 1.217s0.553 0.299 1.094 0.299h11.64z' />
                </g>
              </g>
              <g>
                <g>
                  <path d='m642.04 743.65c0.658 0 1.135-0.106 1.429-0.319s0.56-0.589 0.794-1.131l3.247-8.523c0.257-0.777 0.388-1.331 0.388-1.661 0-0.613-0.159-1.133-0.477-1.556-0.317-0.425-0.741-0.769-1.27-1.026-0.53-0.26-1.135-0.453-1.817-0.583s-1.377-0.22-2.081-0.266c-0.354 0-0.601-0.127-0.741-0.383-0.142-0.254-0.212-0.521-0.212-0.799 0-0.301 0.07-0.581 0.212-0.834 0.141-0.257 0.388-0.384 0.741-0.384 0.564 0 1.188 0.03 1.868 0.089 0.684 0.059 1.383 0.124 2.1 0.194 0.718 0.069 1.441 0.136 2.17 0.192 0.729 0.06 1.424 0.09 2.082 0.09 1.247 0 2.452-0.095 3.616-0.282 1.163-0.188 2.417-0.283 3.756-0.283 0.283 0 0.507 0.14 0.672 0.418 0.164 0.278 0.247 0.579 0.247 0.903 0 0.255-0.065 0.487-0.194 0.695s-0.347 0.336-0.653 0.383l-1.093 0.141c-0.73 0.165-1.381 0.364-1.958 0.601-0.577 0.235-1.123 0.583-1.642 1.041-0.517 0.459-1.011 1.082-1.48 1.872-0.472 0.787-0.965 1.817-1.483 3.089l-16.334 41.132c-0.141 0.399-0.529 0.6-1.164 0.6-0.658 0-1.187-0.2-1.588-0.6-1.199-3.085-2.488-6.386-3.862-9.904-1.376-3.519-2.781-7.097-4.217-10.732-1.435-3.637-2.875-7.249-4.321-10.839s-2.828-6.985-4.146-10.187c-0.563-1.389-1.117-2.465-1.658-3.229-0.541-0.766-1.094-1.348-1.659-1.748-0.563-0.401-1.14-0.671-1.728-0.812-0.587-0.142-1.211-0.283-1.869-0.424-0.282-0.047-0.487-0.197-0.618-0.452-0.129-0.256-0.194-0.521-0.194-0.8 0-0.302 0.06-0.568 0.177-0.8 0.117-0.23 0.307-0.348 0.564-0.348 0.753 0 1.5 0.023 2.239 0.07 0.742 0.048 1.477 0.118 2.206 0.213 0.707 0.093 1.458 0.164 2.258 0.211 0.799 0.047 1.647 0.071 2.54 0.071 2.047 0 3.951-0.095 5.716-0.282 1.764-0.188 3.469-0.283 5.115-0.283 0.329 0 0.582 0.127 0.759 0.384 0.176 0.253 0.266 0.556 0.266 0.902 0 0.278-0.072 0.522-0.214 0.73-0.141 0.208-0.388 0.336-0.739 0.383-1.647 0.211-2.846 0.506-3.6 0.884-0.775 0.378-1.164 1.18-1.164 2.405 0 0.329 0.035 0.712 0.105 1.149 0.071 0.437 0.225 1.031 0.459 1.785 0.235 0.755 0.57 1.722 1.006 2.899 0.435 1.179 1.018 2.676 1.746 4.492 0.235 0.635 0.559 1.036 0.971 1.201 0.411 0.166 1.075 0.249 1.993 0.249h12.7zm-12.45 2.82c-0.659 0-1.111 0.11-1.358 0.333-0.247 0.225-0.253 0.619-0.019 1.183l6.315 16.899c0.095 0.259 0.283 0.389 0.565 0.389 0.281 0 0.471-0.13 0.563-0.389l6.599-16.899c0.235-0.611 0.259-1.018 0.069-1.217-0.188-0.2-0.552-0.299-1.094-0.299h-11.63z' />
                </g>
              </g>
            </g>
          </g>
          <path
            clipRule='evenodd'
            d='m403.05 238.14c-18.189 69.222-103.64 92.413-107.11 180.59-2.722 69.145 63.832 80.238 96.25 30.838-0.86 42.78-13.19 105.43-13.19 105.43h45.614s-15.057-58.164-15.924-103.28c27.67 48.012 91.327 33.449 90.834-28.124-0.54-68.51-93.43-128.42-96.47-185.46z'
            fillRule='evenodd'
          />
          <g clipRule='evenodd' fillRule='evenodd'>
            <path d='m163.42 78.603c-3.67 13.971-20.918 18.653-21.619 36.45-0.55 13.957 12.884 15.917 19.427 5.945-0.171 8.637-2.661 21.002-2.661 21.002h9.207s-3.039-11.459-3.214-20.566c5.586 9.691 18.435 6.892 18.335-5.537-0.12-13.82-18.86-25.773-19.48-37.287z' />
            <path d='m631.96 720.18c3.672-13.973 20.919-18.653 21.62-36.45 0.55-13.958-12.884-16.309-19.428-6.339 0.172-8.637 2.661-21.393 2.661-21.393h-9.206s3.038 11.852 3.213 20.96c-5.584-9.691-18.434-6.698-18.334 5.733 0.12 13.83 18.87 25.98 19.48 37.49z' />
          </g>
        </g>
      </svg>

      <Text>Ile graczy?</Text>
      <Container>
        {playersCount > 0 ? (
          <Button onClick={() => playersCountSet((prev) => prev - 1)}>-</Button>
        ) : null}
        <Text>{playersCount}</Text>
        <Button onClick={() => playersCountSet((prev) => prev + 1)}>+</Button>
      </Container>
      {range(playersCount).map((el, i) => {
        return (
          <Input
            key={i}
            type='text'
            placeholder='Imię gracza'
            maxLength={6}
            onChange={(e) =>
              playersSet((prevArr) => {
                return Object.assign([], prevArr, { [el]: e.target.value });
              })
            }
          />
        );
      })}
      {players.length > 1 && !players.includes('') ? (
        <Button onClick={() => startSet(true)}>Rozpocznij grę</Button>
      ) : null}
    </>
  );
};

export default Setup;
export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  color: rgb(74, 74, 74);
  font-weight: 400;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  max-width: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 14px 16px;
  margin: 0 4px;
`;
export const Text = styled.div`
  font-size: 16px;
  margin: 0 1px;
  white-space: pre;
  text-align: center;
  letter-spacing: -1px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
export const Input = styled.input`
  margin: 8px 0;
  border: none;
  outline: none;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  font-size: 20px;
  padding: 4px;
`;
