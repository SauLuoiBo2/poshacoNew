import { images } from '@src/assets';
import { themes } from '../themes';

type statusItem = {
    ID: string;
    NAME: string;
    IMAGE: any;
};

type statusT = {
    DELIVERED: statusItem;
    CANCELED: statusItem;
    PENDING: statusItem;
    TRANSPORTING: statusItem;
    CONFIRMED: statusItem;
};

class RenderOrderStatus {
    status: statusT;

    constructor() {
        this.status = {
            DELIVERED: {
                ID: 'DELIVERED',
                NAME: 'Đã giao hàng',
                IMAGE: images.orderPending,
            },
            CANCELED: {
                ID: 'CANCELED',
                NAME: 'Đã Huỷ',
                IMAGE: images.orderCanceled,
            },
            PENDING: {
                ID: 'PENDING',
                NAME: 'Chờ xác nhận',
                IMAGE: images.orderPending,
            },
            TRANSPORTING: {
                ID: 'TRANSPORTING',
                NAME: 'Đang vận chuyển',
                IMAGE: images.orderTransporting,
            },
            CONFIRMED: {
                ID: 'CONFIRMED',
                NAME: 'Đã Xác nhận',
                IMAGE: images.orderConfirmed,
            },
        };
    }

    colorStatus(status: string): string {
        if (status === this.status.DELIVERED.ID) {
            return themes.colors.green;
        }
        if (status === this.status.CANCELED.ID) {
            return themes.colors.red;
        }
        return themes.colors.orange;
    }
    nameStatus(status: string): string {
        switch (status) {
            case this.status.PENDING.ID: // Chờ xác nhận
                return this.status.PENDING.NAME;

            case this.status.TRANSPORTING.ID: // Đang vận chuyển
                return this.status.TRANSPORTING.NAME;
            case this.status.CONFIRMED.ID: // Đã Xác nhận
                return this.status.CONFIRMED.NAME;
            case this.status.CANCELED.ID: // Đã Huỷ
                return this.status.CANCELED.NAME;
            default: // DELIVERED - Đã giao hàng
                return this.status.DELIVERED.NAME;
        }
    }
    renderImage(status: string): any {
        switch (status) {
            case this.status.PENDING.ID: // Chờ xác nhận
                return this.status.PENDING.IMAGE;

            case this.status.TRANSPORTING.ID: // Đang vận chuyển
                return this.status.TRANSPORTING.IMAGE;
            case this.status.CONFIRMED.ID: // Đã Xác nhận
                return this.status.CONFIRMED.IMAGE;
            case this.status.CANCELED.ID: // Đã Huỷ
                return this.status.CANCELED.IMAGE;
            default: // DELIVERED - Đã giao hàng
                return this.status.DELIVERED.IMAGE;
        }
    }
}

export { RenderOrderStatus };
