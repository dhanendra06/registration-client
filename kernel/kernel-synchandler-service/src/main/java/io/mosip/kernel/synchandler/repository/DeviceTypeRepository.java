package io.mosip.kernel.synchandler.repository;

import org.springframework.stereotype.Repository;

import io.mosip.kernel.core.dataaccess.spi.repository.BaseRepository;
import io.mosip.kernel.synchandler.entity.DeviceType;

/**
 * Repository function to fetching Device Type details
 * 
 * @author Megha Tanga
 * @since 1.0.0
 *
 */
@Repository
public interface DeviceTypeRepository extends BaseRepository<DeviceType, String> {
	
	

}