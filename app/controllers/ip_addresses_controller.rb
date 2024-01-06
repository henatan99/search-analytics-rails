class IpAddressesController < ApplicationController
    protect_from_forgery with: :exception

    def index
        @ip_address = IpAddress.includes(:searches).find_by(address: request.remote_ip)
        respond_to do |format|
            format.json { render json: @ip_address.as_json(include: :searches) }
        end
    end

    def new 
        @ip_address = IpAddress.new
    end

    def show
        @ip_address = IpAddress.find(params[:id])
        respond_to do |format|
            format.json { render json: @ip_address }
        end
    end

    def create
        @ip_address = IpAddress.find_by(address: request.remote_ip)
        if(@ip_address) {
            render json: { message: 'Search was successfully created.', ip_address: @ip_address}
        } else {
            @ip_address = IpAddress.new(address: request.remote_ip)
                
            if @ip_address.save
                render json: { message: 'Search was successfully created.', ip_address: @ip_address}, status: :created
            else
                render json: { errors: @ip_address.errors.full_messages, remote_ip: request.remote_ip }, status: :unprocessable_entity
            end
        }
    end

    private
        def ip_address_params
            params.require(:ip_address).permit(:address)
        end

end
