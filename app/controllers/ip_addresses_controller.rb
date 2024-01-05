class IpAddressesController < ApplicationController
    protect_from_forgery with: :exception

    def index
        @ip_address = IpAddress.includes(:searches).find_by(request.remote_ip)
        respond_to do |format|
            format.json { render json: @ip_address }
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
        begin
            @ip_address = IpAddress.new(address: request.remote_ip)
                
            if @ip_address.save
                render json: { message: 'Search was successfully created.' }, status: :created
            else
                render json: { errors: @ip_address.errors.full_messages, remote_ip: request.remote_ip }, status: :unprocessable_entity
            end
        rescue => e
            render json: { errors: ["An error occurred: #{e.message}"] }, status: :unprocessable_entity
        end
    end

    private
        def ip_address_params
            params.require(:ip_address).permit(:address)
        end

end
