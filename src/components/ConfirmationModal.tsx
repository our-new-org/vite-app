import { Modal } from 'antd';

type ConfirmationModalProps = {
  onConfirm?: () => void;
  onCancel: () => void;
  open: boolean;
};

const ConfirmationModal = ({
  onConfirm,
  onCancel,
  open,
}: ConfirmationModalProps) => {
  return (
    <Modal
      title="Confirmation"
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Confirm"
      cancelText="Cancel">
      Are you sure you want to cancel this booking?
    </Modal>
  );
};

export default ConfirmationModal;
