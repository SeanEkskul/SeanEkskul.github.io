import React from "react";

interface IProps {
  nama: string;
  kelas: string;
}

class Info extends React.Component<IProps> {
  render() {
    return (
      <div>
        <h5>Nama: {this.props.nama}</h5>
        <p>Kelas: {this.props.kelas}</p>
      </div>
    );
  }
}

export default Info;
