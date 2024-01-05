class IpAddressesController < ApplicationController
    protect_from_forgery with: :exception

    def index
        @ip_addresses = IpAddress.all
        respond_to do |format|
            format.json { render json: @searches }
        end
    end

    def new 
        @ip_address = IpAddress.new
    end

    def show
        @ip_address = Article.find(params[:id])
        respond_to do |format|
            format.json { render json: @searches }
        end
    end

    def create
        begin
            @ip_address = IpAddress.new(request.remote_ip)
                
            if @ip_address.save
                render json: { message: 'Search was successfully created.' }, status: :created
            else
                render json: { errors: @ip_address.errors.full_messages, remote_ip: request.remote_ip }, status: :unprocessable_entity
            end
        rescue ActiveRecord::RecordNotFound => e
            Rails.logger.error("User not found: #{e.message}")
            render json: { error: 'User not found' }, status: :not_found
        end
    end

    private
        def ip_address_params
            params.require(:ip_address).permit(:address)
        end

end
